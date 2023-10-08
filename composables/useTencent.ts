import COS from 'cos-js-sdk-v5'

export const useSts = () => {
  return useRequest<TencentSts>('/tencent/sts/credential')
}

const isExpire = (time: string | number) => new Date() > new Date(time)

export const useCos = () => {
  const runtimeConfig = useRuntimeConfig()
  const { data: sts } = useSts()

  const params = computed(() => {
    if (!sts.value) { return }
    return {
      TmpSecretId: sts.value.credentials.tmpSecretId,
      TmpSecretKey: sts.value.credentials.tmpSecretKey,
      SecurityToken: sts.value.credentials.sessionToken,
      StartTime: sts.value.startTime,
      ExpiredTime: sts.value.expiredTime
    }
  })

  const upload = async (file: File) => {
    if (!sts.value || isExpire(sts.value.expiration)) {
      const { data } = await useSts()
      sts.value = data.value
    }

    if (!sts.value) { return }

    const cos = new COS({
      getAuthorization: (_, cb) => {
        params.value && cb(params.value)
      }
    })

    return new Promise((resolve) => {
      const params = {
        Bucket: runtimeConfig.TENCENT_BUCKET,
        Region: runtimeConfig.TENCENT_REGION,
        Key: `images/${file.name}`,
        Body: file
      }

      cos.uploadFile(params, (_, data) => {
        resolve(data.Location)
      })
    })
  }

  return { sts, upload }
}

const MINIO_BUCKET = 'subsproxy'
const MINIO_PREFIX = 'images'

export const useMinio = () => {
  const upload = async (file: File) => {
    const formData = new FormData()
    formData.append('file', file)
    const { data } = await useRequest(`/oss/buckets/${MINIO_BUCKET}/objects`, { method: 'put', body: formData })
    return data.value.url
  }

  return { upload }
}

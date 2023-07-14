export const useDeleteDevice = (deviceId: string) => {
  return useRequest<void>(`/devices/${deviceId}`, { method: 'delete' })
}

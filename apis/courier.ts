import { useRequest } from '@/hooks/useRequest'

class Courier {
  async get(courier: string) {
    return await useRequest.GET(`/courier/${courier}`).then(res => res.data)
  }
}

export const courierApi = new Courier()

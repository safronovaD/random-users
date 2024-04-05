import httpService from '../services/httpService';

const PATH = 'https://randomuser.me/api/';

export async function getUsers() {
  const { data } = await httpService.get(PATH, {
    params: {
      results: 100,
      seed: 'abc',
      inc: 'id,name,email,picture,phone,gender'
    }
  });

  return { data };
}


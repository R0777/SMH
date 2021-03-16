export const BASE_URL = 'https://app.news.students.nomoredomains.work';

export const addAddress = (fio, tel, email) => {
    console.log(fio, tel, email)
  return fetch(`${BASE_URL}/address`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({fio, tel, email})
  })
  .then((res) => {
    return res
  })
};
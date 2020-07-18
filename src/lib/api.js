const instanceAxios = axios.create({
  baseURL: 'http://sleepyeePanda.pythonanywhere.com',
});

export const applyVideo = async (url, title) => {
  const response = await instanceAxios('/video', {
    url,
    title
  })
  return response;
}
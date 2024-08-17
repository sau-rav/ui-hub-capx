export const parseResponseStream = async (data: any) => {
  const reader = data?.body?.getReader();

  // Function to process the stream data
  let result = "";
  const processStream = async () => {
    let done = false;

    while (!done) {
      const { value, done: streamDone } = await reader.read();
      done = streamDone;

      if (value) {
        result += new TextDecoder().decode(value);
      }
    }
  };

  await processStream();

  const response = JSON.parse(result).response;

  return response;
};

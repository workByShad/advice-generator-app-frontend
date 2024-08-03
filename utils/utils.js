export const adviceSubmissionHandler = async (e) => {
  e.preventDefault();

  const form = e.target;
  const adviceText = form.adviceText.value;

  console.log(adviceText);

  try {
    const response = await fetch(
      "http://127.0.0.1:5001/advice-generator-app-3f221/us-central1/api/advice/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ adviceText }),
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // const data = await response.json();
    // console.log(data);
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const acquireData = async () => {
  try {
    const response = await fetch(
      "http://127.0.0.1:5001/advice-generator-app-3f221/us-central1/api/advice/",
      { next: { revalidate: 30 } }
    );

    const data = await response.json();

    // console.log("Data acquired:", data);

    return data;
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
};

export const doNothing = async (e) => {
  e.preventDefault();

  console.log("do nothing");
};

export const getRandomInt = (ceiling) => {
  return Math.floor(Math.random() * ceiling);
};

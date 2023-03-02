const url = "https://63f9319e473885d837cafdd9.mockapi.io/shoes/";

export async function getData() {
  const reponse = await fetch(url);
  const data = await reponse.json();

  return data;
}

export async function getIndexData(index) {
  const reponse = await fetch(url + index);
  const data = await reponse.json();

  return data;
}

export async function addData(data) {
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return response;
}

export async function updateData(index, data) {
  const response = await fetch(url + index, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  return response;
}

export async function deleteData(index) {
  const response = await fetch(url + index, {
    method: "DELETE",
  });

  return response;
}

const config: any = {
  vcsRest: {
    url: "",
  },
};

const request = new XMLHttpRequest();

const serverHost = window.location.hostname;
if (serverHost === "localhost") {
  config.vcsRest.url = "http://localhost:8080";
} else {
  request.open("GET", `https://${serverHost}/config`, false); // `false` makes the request synchronous
  request.send(null);

  if (request.status === 200) {
    const serverConfig = JSON.parse(request.responseText);
    config.vcsRest.url = `https://${serverHost}`;
  }
}

export default config;

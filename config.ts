interface Config {
  BASEPATH: string;
}

const config: Config = {
  BASEPATH: process.env.BASE_PATH || "http://localhost:8080/",
};

export default config;

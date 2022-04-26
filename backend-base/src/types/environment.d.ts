declare global {
  namespace NodeJS {
    interface ProcessEnv {
      MONGO_URI?: string;
      MONGO_DB?: string;
      HEADLESS?: boolean;
    }
  }
}

export {};

// https://stackoverflow.com/a/53981706

export type SubmissionResponse = {
  sourceCode: string;
  languageID: number;
  stdin: string;
  expectedOutput: null;
  stdout: null;
  statusID: number;
  createdAt: Date;
  finishedAt: Date;
  time: string;
  memory: number;
  stderr: string;
  token: string;
  numberOfRuns: number;
  cpuTimeLimit: string;
  cpuExtraTime: string;
  wallTimeLimit: string;
  memoryLimit: number;
  stackLimit: number;
  maxProcessesAndOrThreads: number;
  enablePerProcessAndThreadTimeLimit: boolean;
  enablePerProcessAndThreadMemoryLimit: boolean;
  maxFileSize: number;
  compileOutput: string | null;
  exitCode: number;
  exitSignal: null;
  message: string;
  wallTime: string;
  compilerOptions: null;
  commandLineArguments: null;
  redirectStderrToStdout: boolean;
  callbackURL: null;
  additionalFiles: null;
  enableNetwork: boolean;
  postExecutionFilesystem: string;
  status: Status;
  language: Language;
};

export type Language = {
  id: number;
  name: string;
};

export type Status = {
  id: number;
  description: string;
};

export type Theme = 'light' | 'dark';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

export type resultType =
  | { resultResponse: string; resultCode: number; resultStatus: string; resultTime: string }
  | undefined;

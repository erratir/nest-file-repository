import { UploadStrategy } from '../enum/upload-strategy';

export const CONFIG = Symbol('CONFIG');

export type FileUploadConfiguration =
  | DiskFileUploadConfiguration
  | S3FileUploadConfiguration
  | MemoryFileUploadConfiguration;

export interface S3FileUploadConfiguration {
  strategy: UploadStrategy.S3;

  options: CommonOptions & {
    region: string;
    credentials: {
      secretAccessKey: string;
      accessKeyId: string;
    };
    bucket: string;
    acl: string;
    endPoint?: string;
    forcePathStyle?: boolean;
  };
}

export interface DiskFileUploadConfiguration {
  strategy: UploadStrategy.DISK;

  options?: CommonOptions;
}

export interface MemoryFileUploadConfiguration {
  strategy: UploadStrategy.MEMORY;

  options?: CommonOptions;
}

export interface CommonOptions {
  path?: string;

  /**
   * The number of milliseconds a request can take before automatically being terminated.
   * 0 disables the timeout.
   */
  timeout?: number;
}

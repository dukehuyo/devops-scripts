import * as fs from 'fs';
import * as path from 'path';

interface File {
  name: string;
  path: string;
  size: number;
}

interface Directory {
  name: string;
  path: string;
  files: File[];
  subdirectories: Directory[];
}

interface DirectoryEntry {
  name: string;
  path: string;
  size: number;
  children: DirectoryEntry[];
}

interface FileEntry {
  name: string;
  path: string;
  size: number;
  children: FileEntry[];
}

class Directory {
  name: string;
  path: string;
  files: File[];
  subdirectories: Directory[];

  constructor(name: string, path: string) {
    this.name = name;
    this.path = path;
    this.files = [];
    this.subdirectories = [];
  }

  addFile(file: File) {
    this.files.push(file);
  }

  addDirectory(directory: Directory) {
    this.subdirectories.push(directory);
  }
}

class File {
  name: string;
  path: string;
  size: number;

  constructor(name: string, path: string, size: number) {
    this.name = name;
    this.path = path;
    this.size = size;
  }
}

class DirectoryEntry {
  name: string;
  path: string;
  size: number;
  children: DirectoryEntry[];

  constructor(name: string, path: string, size: number) {
    this.name = name;
    this.path = path;
    this.size = size;
    this.children = [];
  }
}

class FileEntry {
  name: string;
  path: string;
  size: number;
  children: FileEntry[];

  constructor(name: string, path: string, size: number) {
    this.name = name;
    this.path = path;
    this.size = size;
    this.children = [];
  }
}
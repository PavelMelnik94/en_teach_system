import { access, mkdir, readFile, rename, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";

export const findRepoRoot = async (start = process.cwd()): Promise<string> => {
  let current = resolve(start);
  while (true) {
    try {
      await access(join(current, ".git"));
      return current;
    } catch {
      const parent = dirname(current);
      if (parent === current) throw new Error("Could not find repository root.");
      current = parent;
    }
  }
};

export const voiceDir = (root: string): string => join(root, "external-practice", "voice");
export const currentPath = (root: string): string => join(voiceDir(root), "current.md");
export const resultPath = (root: string): string => join(voiceDir(root), "result.md");

export const exists = async (path: string): Promise<boolean> => {
  try {
    await access(path);
    return true;
  } catch {
    return false;
  }
};

export const atomicWrite = async (path: string, content: string): Promise<void> => {
  await mkdir(dirname(path), { recursive: true });
  const temporary = `${path}.tmp-${process.pid}`;
  await writeFile(temporary, content, "utf8");
  await rename(temporary, path);
};

export const readText = (path: string): Promise<string> => readFile(path, "utf8");

import { fromFile } from 'file-type'
import fs from 'fs'
import path from 'path'

import type { File } from './types'

const getFileByPath = async (filePath: string): Promise<File> => {
  if (typeof filePath === 'string') {
    const data = fs.readFileSync(filePath)
    const mimetype = fromFile(filePath)
    const { size } = fs.statSync(filePath)

    const name = path.basename(filePath)

    return {
      name,
      data,
      mimetype: (await mimetype).mime,
      size,
    }
  }

  return undefined
}

export default getFileByPath

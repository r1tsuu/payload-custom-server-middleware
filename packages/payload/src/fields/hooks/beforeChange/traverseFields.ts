import type { PayloadRequest, RequestContext } from '../../../express/types'
import type { Operation } from '../../../types'
import type { Field, TabAsField } from '../../config/types'

import { promise } from './promise'

type Args = {
  context: RequestContext
  data: Record<string, unknown>
  doc: Record<string, unknown>
  docWithLocales: Record<string, unknown>
  errors: { field: string; message: string }[]
  fields: (Field | TabAsField)[]
  id?: number | string
  mergeLocaleActions: (() => void)[]
  operation: Operation
  path: string
  req: PayloadRequest
  siblingData: Record<string, unknown>
  siblingDoc: Record<string, unknown>
  siblingDocWithLocales: Record<string, unknown>
  skipValidation?: boolean
}

export const traverseFields = async ({
  id,
  context,
  data,
  doc,
  docWithLocales,
  errors,
  fields,
  mergeLocaleActions,
  operation,
  path,
  req,
  siblingData,
  siblingDoc,
  siblingDocWithLocales,
  skipValidation,
}: Args): Promise<void> => {
  const promises = []

  fields.forEach((field) => {
    promises.push(
      promise({
        id,
        context,
        data,
        doc,
        docWithLocales,
        errors,
        field,
        mergeLocaleActions,
        operation,
        path,
        req,
        siblingData,
        siblingDoc,
        siblingDocWithLocales,
        skipValidation,
      }),
    )
  })

  await Promise.all(promises)
}

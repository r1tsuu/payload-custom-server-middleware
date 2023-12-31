/* tslint:disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

export interface Config {
  collections: {
    users: User
    'array-fields': ArrayField
    'block-fields': BlockField
    'code-fields': CodeField
    'collapsible-fields': CollapsibleField
    'conditional-logic': ConditionalLogic
    'date-fields': DateField
    'radio-fields': RadioField
    'group-fields': GroupField
    'row-fields': RowField
    'indexed-fields': IndexedField
    'json-fields': JsonField
    'number-fields': NumberField
    'point-fields': PointField
    'relationship-fields': RelationshipField
    'rich-text-fields': RichTextField
    'select-fields': SelectField
    'tabs-fields': TabsField
    'text-fields': TextField
    uploads: Upload
    uploads2: Uploads2
    uploads3: Uploads3
  }
  globals: {}
}
export interface User {
  id: string
  canViewConditionalField?: boolean
  updatedAt: string
  createdAt: string
  email: string
  resetPasswordToken?: string
  resetPasswordExpiration?: string
  salt?: string
  hash?: string
  loginAttempts?: number
  lockUntil?: string
  password?: string
}
export interface ArrayField {
  id: string
  items: {
    text: string
    id?: string
  }[]
  collapsedArray?: {
    text: string
    id?: string
  }[]
  localized: {
    text: string
    id?: string
  }[]
  readOnly?: {
    text?: string
    id?: string
  }[]
  potentiallyEmptyArray?: {
    text?: string
    id?: string
  }[]
  rowLabelAsFunction?: {
    title?: string
    id?: string
  }[]
  rowLabelAsComponent?: {
    title?: string
    id?: string
  }[]
  updatedAt: string
  createdAt: string
}
export interface BlockField {
  id: string
  blocks: (
    | {
        text: string
        richText?: {
          [k: string]: unknown
        }[]
        id?: string
        blockName?: string
        blockType: 'text'
      }
    | {
        number: number
        id?: string
        blockName?: string
        blockType: 'number'
      }
    | {
        subBlocks?: (
          | {
              text: string
              id?: string
              blockName?: string
              blockType: 'text'
            }
          | {
              number: number
              id?: string
              blockName?: string
              blockType: 'number'
            }
        )[]
        id?: string
        blockName?: string
        blockType: 'subBlocks'
      }
    | {
        textInCollapsible?: string
        textInRow?: string
        id?: string
        blockName?: string
        blockType: 'tabs'
      }
  )[]
  collapsedByDefaultBlocks: (
    | {
        text: string
        richText?: {
          [k: string]: unknown
        }[]
        id?: string
        blockName?: string
        blockType: 'text'
      }
    | {
        number: number
        id?: string
        blockName?: string
        blockType: 'number'
      }
    | {
        subBlocks?: (
          | {
              text: string
              id?: string
              blockName?: string
              blockType: 'text'
            }
          | {
              number: number
              id?: string
              blockName?: string
              blockType: 'number'
            }
        )[]
        id?: string
        blockName?: string
        blockType: 'subBlocks'
      }
    | {
        textInCollapsible?: string
        textInRow?: string
        id?: string
        blockName?: string
        blockType: 'tabs'
      }
  )[]
  localizedBlocks: (
    | {
        text: string
        richText?: {
          [k: string]: unknown
        }[]
        id?: string
        blockName?: string
        blockType: 'text'
      }
    | {
        number: number
        id?: string
        blockName?: string
        blockType: 'number'
      }
    | {
        subBlocks?: (
          | {
              text: string
              id?: string
              blockName?: string
              blockType: 'text'
            }
          | {
              number: number
              id?: string
              blockName?: string
              blockType: 'number'
            }
        )[]
        id?: string
        blockName?: string
        blockType: 'subBlocks'
      }
    | {
        textInCollapsible?: string
        textInRow?: string
        id?: string
        blockName?: string
        blockType: 'tabs'
      }
  )[]
  i18nBlocks?: {
    text?: string
    id?: string
    blockName?: string
    blockType: 'text'
  }[]
  updatedAt: string
  createdAt: string
}
export interface CodeField {
  id: string
  javascript?: string
  typescript?: string
  json?: string
  html?: string
  css?: string
  updatedAt: string
  createdAt: string
}
export interface CollapsibleField {
  id: string
  text: string
  group?: {
    textWithinGroup?: string
    subGroup?: {
      textWithinSubGroup?: string
    }
  }
  someText?: string
  functionTitleField?: string
  componentTitleField?: string
  nestedTitle?: string
  arrayWithCollapsibles?: {
    innerCollapsible?: string
    id?: string
  }[]
  updatedAt: string
  createdAt: string
}
export interface ConditionalLogic {
  id: string
  text: string
  toggleField?: boolean
  fieldToToggle: string
  userConditional?: string
  updatedAt: string
  createdAt: string
}
export interface DateField {
  id: string
  default: string
  timeOnly?: string
  dayOnly?: string
  dayAndTime?: string
  monthOnly?: string
  updatedAt: string
  createdAt: string
}
export interface RadioField {
  id: string
  radio?: 'one' | 'two' | 'three'
  updatedAt: string
  createdAt: string
}
export interface GroupField {
  id: string
  group: {
    text: string
    defaultParent?: string
    defaultChild?: string
    subGroup?: {
      textWithinGroup?: string
      arrayWithinGroup?: {
        textWithinArray?: string
        id?: string
      }[]
    }
  }
  potentiallyEmptyGroup?: {
    text?: string
  }
  groupInRow?: {
    field?: string
    secondField?: string
    thirdField?: string
  }
  secondGroupInRow?: {
    field?: string
    nestedGroup?: {
      nestedField?: string
    }
  }
  groups: {
    groupInRow?: {
      field?: string
      secondField?: string
      thirdField?: string
    }
    secondGroupInRow?: {
      field?: string
      nestedGroup?: {
        nestedField?: string
      }
    }
  }
  updatedAt: string
  createdAt: string
}
export interface RowField {
  id: string
  title: string
  updatedAt: string
  createdAt: string
}
export interface IndexedField {
  id: string
  text: string
  uniqueText?: string
  /**
   * @minItems 2
   * @maxItems 2
   */
  point?: [number, number]
  group?: {
    localizedUnique?: string
    /**
     * @minItems 2
     * @maxItems 2
     */
    point?: [number, number]
  }
  collapsibleLocalizedUnique?: string
  collapsibleTextUnique?: string
  partOne?: string
  partTwo?: string
  updatedAt: string
  createdAt: string
}
export interface JsonField {
  id: string
  json?:
    | {
        [k: string]: unknown
      }
    | unknown[]
    | string
    | number
    | boolean
    | null
  updatedAt: string
  createdAt: string
}
export interface NumberField {
  id: string
  number?: number
  min?: number
  max?: number
  positiveNumber?: number
  negativeNumber?: number
  decimalMin?: number
  decimalMax?: number
  defaultNumber?: number
  hasMany?: number[]
  validatesHasMany?: number[]
  localizedHasMany?: number[]
  updatedAt: string
  createdAt: string
}
export interface PointField {
  id: string
  /**
   * @minItems 2
   * @maxItems 2
   */
  point: [number, number]
  /**
   * @minItems 2
   * @maxItems 2
   */
  localized?: [number, number]
  group?: {
    /**
     * @minItems 2
     * @maxItems 2
     */
    point?: [number, number]
  }
  updatedAt: string
  createdAt: string
}
export interface RelationshipField {
  id: string
  relationship:
    | {
        value: string | TextField
        relationTo: 'text-fields'
      }
    | {
        value: string | ArrayField
        relationTo: 'array-fields'
      }
  relationToSelf?: string | RelationshipField
  relationToSelfSelectOnly?: string | RelationshipField
  relationWithDynamicDefault?: string | User
  relationHasManyWithDynamicDefault?: {
    value: string | User
    relationTo: 'users'
  }
  relationshipWithMin?: string[] | TextField[]
  relationshipWithMax?: string[] | TextField[]
  updatedAt: string
  createdAt: string
}
export interface TextField {
  id: string
  text: string
  localizedText?: string
  i18nText?: string
  defaultFunction?: string
  defaultAsync?: string
  overrideLength?: string
  updatedAt: string
  createdAt: string
}
export interface RichTextField {
  id: string
  title: string
  selectHasMany?: ('one' | 'two' | 'three' | 'four' | 'five' | 'six')[]
  richText: {
    [k: string]: unknown
  }[]
  richTextCustomFields?: {
    [k: string]: unknown
  }[]
  richTextReadOnly?: {
    [k: string]: unknown
  }[]
  updatedAt: string
  createdAt: string
}
export interface SelectField {
  id: string
  select?: 'one' | 'two' | 'three'
  selectReadOnly?: 'one' | 'two' | 'three'
  selectHasMany?: ('one' | 'two' | 'three' | 'four' | 'five' | 'six')[]
  selectHasManyLocalized?: ('one' | 'two')[]
  selectI18n?: 'one' | 'two' | 'three'
  simple?: 'One' | 'Two' | 'Three'
  updatedAt: string
  createdAt: string
}
export interface TabsField {
  id: string
  array: {
    text: string
    id?: string
  }[]
  blocks: (
    | {
        text: string
        richText?: {
          [k: string]: unknown
        }[]
        id?: string
        blockName?: string
        blockType: 'text'
      }
    | {
        number: number
        id?: string
        blockName?: string
        blockType: 'number'
      }
    | {
        subBlocks?: (
          | {
              text: string
              id?: string
              blockName?: string
              blockType: 'text'
            }
          | {
              number: number
              id?: string
              blockName?: string
              blockType: 'number'
            }
        )[]
        id?: string
        blockName?: string
        blockType: 'subBlocks'
      }
    | {
        textInCollapsible?: string
        textInRow?: string
        id?: string
        blockName?: string
        blockType: 'tabs'
      }
  )[]
  group: {
    number: number
  }
  textInRow: string
  numberInRow: number
  tab: {
    array: {
      text: string
      id?: string
    }[]
    text?: string
    defaultValue?: string
  }
  namedTabWithDefaultValue: {
    defaultValue?: string
  }
  localizedTab: {
    text?: string
  }
  accessControlTab: {
    text?: string
  }
  hooksTab: {
    beforeValidate?: boolean
    beforeChange?: boolean
    afterChange?: boolean
    afterRead?: boolean
  }
  textarea?: string
  anotherText: string
  nestedTab: {
    text?: string
  }
  updatedAt: string
  createdAt: string
}
export interface Upload {
  id: string
  text?: string
  media?: string | Upload
  richText?: {
    [k: string]: unknown
  }[]
  updatedAt: string
  createdAt: string
  url?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
}
export interface Uploads2 {
  id: string
  text?: string
  media?: string | Uploads2
  updatedAt: string
  createdAt: string
  url?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
}
export interface Uploads3 {
  id: string
  media?: string | Uploads3
  richText?: {
    [k: string]: unknown
  }[]
  updatedAt: string
  createdAt: string
  url?: string
  filename?: string
  mimeType?: string
  filesize?: number
  width?: number
  height?: number
}

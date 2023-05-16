import { Entity } from '../../Entity'
import { CardEntityForExtension, PageEntityForExtension } from './types'

export namespace GetUsers {
  export interface Request {
    readonly userIds: readonly string[]
  }
  export interface Response {
    readonly users: readonly Entity.User[]
  }
}

export namespace GetPages {
  export interface Request {
    readonly pageIds?: readonly string[]
    readonly withExtensionInstalled?: boolean
  }
  export interface Response<D = any> {
    readonly pages: readonly PageEntityForExtension<D>[]
  }
}

export namespace GetPageMembers {
  export interface Request {
    readonly userIds?: readonly string[]
    readonly pageIds?: readonly string[]
  }
  export interface Response {
    readonly pageMembers: readonly Entity.PageMember[]
  }
}

export namespace GetCards {
  export interface Request {
    readonly cardIds?: readonly string[]
    readonly pageIds?: readonly string[]
  }
  export interface Response<D = any> {
    readonly cards: readonly CardEntityForExtension<D>[]
  }
}

export namespace SetPageExtensionData {
  export interface Request<D = any> {
    readonly pageId: string
    readonly data?: D
  }
  export interface Response {}
}

export namespace SetCardExtensionData {
  export interface Request<D = any> {
    readonly cardId: string
    readonly data?: D
  }
  export interface Response {}
}

export namespace AddPage {
  export interface Request<D = any> {
    readonly page: Readonly<
      Pick<PageEntityForExtension<D>, 'ownerId' | 'name'> &
        Partial<
          Pick<
            PageEntityForExtension<D>,
            'description' | 'iconEmoji' | 'color' | 'avatarFileId' | 'public' | 'extensionData'
          >
        >
    >
  }
  export interface Response {
    readonly pageId: string
  }
}

export namespace EditPage {
  export interface Request<D = any> {
    readonly pageId: string
    readonly updates: Readonly<
      Partial<
        Pick<
          PageEntityForExtension<D>,
          | 'catalystUserId'
          | 'name'
          | 'description'
          | 'iconEmoji'
          | 'color'
          | 'avatarFileId'
          | 'public'
          | 'extensionData'
        >
      >
    >
  }
  export interface Response {}
}

export namespace AddCard {
  export interface Request<D = any> {
    readonly card: Readonly<
      Pick<CardEntityForExtension<D>, 'ownerId' | 'pageId'> &
        Partial<Pick<CardEntityForExtension<D>, 'color' | 'sequence' | 'extensionData'>> &
        (Pick<CardEntityForExtension<D>, 'blocks'> | { readonly text: string })
    >
  }
  export interface Response {
    readonly cardId: string
  }
}

export namespace EditCard {
  export interface Request<D = any> {
    readonly cardId: string
    readonly updates: Readonly<
      Partial<
        Pick<CardEntityForExtension<D>, 'catalystUserId' | 'pageId' | 'color' | 'sequence' | 'extensionData'> &
          (Pick<CardEntityForExtension<D>, 'blocks'> | { readonly text: string })
      >
    >
  }
  export interface Response {}
}

export namespace AddBadge {
  export interface Request {
    readonly badge: {
      readonly userId: string
      // For now only this badge action type is needed, we may improve this later:
      readonly mentionInCard: {
        readonly userId: string
        readonly cardId: string
      }
    }
  }
  export interface Response {}
}

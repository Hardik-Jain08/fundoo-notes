import { UserI } from './user';

export interface NoteI {
    title?: string,
    description: string,
    isPined: boolean,
    isArchived: boolean,
    isDeleted: boolean,
    reminder: [],
    color: string,
    label: [],
    imageUrl: string,
    linkUrl: string,
    collaborators: [],
    id: string,
    userId: string,
    collaberator: [],
    labelIdList: [],
    noteCheckLists: [],
    noteLabels: [],
    questionAndAnswerNotes: [],
    user: UserI
}

export interface Hero {
    id:          number;
    name:        string;
    description: string;
    modified:    string;
    thumbnail:   Thumbnail;
    resourceURI: string;
    comics:      ComicsList;
    series:      ComicsList;
    stories:     Stories;
    events:      ComicsList;
    urls:        URL[];
}

export interface ComicsList {
    available:     number;
    collectionURI: string;
    items:         ComicsItem[];
    returned:      number;
}

export interface ComicsItem {
    resourceURI: string;
    name:        string;
}

export interface Stories {
    available:     number;
    collectionURI: string;
    items:         StoriesItem[];
    returned:      number;
}

export interface StoriesItem {
    resourceURI: string;
    name:        string;
    type:        ItemType;
}

export enum ItemType {
    Cover = "cover",
    Empty = "",
    InteriorStory = "interiorStory",
}

export interface Thumbnail {
    path:      string;
    extension: "gif" | "jpg";
}

export interface URL {
    type: "comiclink" | "detail" | "wiki";
    url:  string;
}

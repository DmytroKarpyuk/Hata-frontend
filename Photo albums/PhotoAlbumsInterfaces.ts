export interface PhotosToAdd {
    name: string;
    isCover: boolean;
}

export interface AlbumToAdd {
    albumName?: string;
    albumDescription?: string;
    files?: PhotosToAdd[];
}
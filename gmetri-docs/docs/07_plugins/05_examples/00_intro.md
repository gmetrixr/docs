---
sidebar_label: Uploading Files
sidebar_position: 1
hide_table_of_contents: false
---

# Uploading Files


### Call pre-signed upload endpoint to get a pre-signed url for file and and it's thumbnail file.

```javascript
async function getPresignedUrl({ file_paths, folderId, name }: { rootName: string; folderId: number; name: string }) {
  const response = await fetch(`/plugin/presignUpload`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${userApiToken}`,
    },
    body: JSON.stringify({ rootName, folderId, name }),
  });
  return await response.json();
}
```

### write selected file to pre-signed url
```javascript
async function writeFileToPresignedUrl({ presignedUrl, file, name }: { presignedUrl: string; file: File }) {
  const response = await fetch(presignedUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "image/*"
    },
    body: file
  });
  return await response.json();
}
```

### call create file api endpoint to add new file into database.

```javascript
async function createFile({ rootName, folderId, uploadMeta }: {
  rootName: string;
  folderId: number;
  uploadMeta: {
    name: string;
    type: string;
    filePaths: {
      o: string;
      t?: string;
      r?: string;
    };
    uuid: string;
    size: number;
    relativePath?: string;
  };
}) {
  const response = await fetch(`/plugin/createFile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${userApiToken}`,
    },
    body: JSON.stringify({ rootName, folderId, name }),
  });
  return await response.json();
}
```
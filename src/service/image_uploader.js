class ImageUploader { // state가 없다. 함수가 있다.
    async upload(file) {
        const data = new FormData();
        data.append('file', file);
        data.append('upload_preset', 'pdzaoz52');
        const result = await fetch(
            'https://api.cloudinary.com/v1_1/dwqiq97cg/upload',
            {
                method: 'POST',
                body: data,
            }
        );
        return await result.json();
    }
}

export default ImageUploader;
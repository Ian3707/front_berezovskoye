import React, { useState } from 'react';
import axios from 'axios';
import PageName from '../../components/UI/page_name/PageName';

const News = () => {
    const [image, setImage] = useState(null);
    const [error, setError] = useState('');

    const handleClick = () => {
        if (!image) {
            alert("Пожалуйста, выберите файл изображения перед загрузкой.");
            return;
        }

        axios.post('http://localhost:8080/images', image)
            .then(res => {
                console.log('Axios response: ', res);
                alert("Изображение успешно загружено!");
            })
            .catch(err => {
                console.error('Error uploading image:', err);
                alert("Произошла ошибка при загрузке изображения.");
            });
    };

    const handleFileInput = (e) => {
        const selectedFile = e.target.files[0];
        console.log('handleFileInput working!');
        console.log(selectedFile);

        if (selectedFile) {
            const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/svg+xml', 'image/webp'];
            if (!validTypes.includes(selectedFile.type)) {
                setError("Пожалуйста, выберите изображение (JPEG, PNG, GIF, SVG, WEBP).");
                setImage(null);
                return;
            }

            setError(""); 
            const formData = new FormData();
            formData.append('my-image-file', selectedFile, selectedFile.name);
            setImage(formData);
        }
    };

    return (
        <div>
            <PageName>Новости</PageName>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={handleClick}>Upload!</button>
            <input type="file" onChange={handleFileInput} accept="image/*" />
        </div>
    );
};

export default News;
import React, { useState } from 'react';
import Main from "../../components/common_page_elements/main/Main";

const News = () => {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]); 
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            alert("Пожалуйста, выберите файл изображения.");
            return;
        }

        const formData = new FormData();
        formData.append("image", selectedFile); 

        try {
            const response = await fetch('http://localhost:8080/img', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                alert("Изображение успешно отправлено!");
            } else {
                alert("Ошибка при отправке изображения.");
            }
        } catch (error) {
            console.error("Ошибка:", error);
            alert("Произошла ошибка при отправке изображения.");
        }
    };

    return (
        <div>
            <h1>Загрузка изображения</h1>
            <form onSubmit={handleSubmit}>
                <input type="file" accept="image/*" onChange={handleFileChange} />
                <button type="submit">Отправить</button>
            </form>
        </div>
    );
};

export default News;
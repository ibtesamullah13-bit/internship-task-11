
body {
    font-family: Arial, sans-serif;
    background: linear-gradient(135deg, #dbeafe, #ede9fe);
    margin: 0;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
}

.gallery {
    background: white;
    width: 100%;
    max-width: 750px;
    padding: 25px;
    border-radius: 15px;
    text-align: center;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
}

h1 {
    color: #4338ca;
}

#galleryImage {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: 12px;
    transition: transform 0.3s;
}

#galleryImage:hover {
    transform: scale(1.02);
}

#caption {
    color: #333;
    margin-bottom: 5px;
}

#imageNumber {
    color: #666;
}

.buttons {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 20px;
}

button {
    background: #4f46e5;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 18px;
    font-size: 15px;
    cursor: pointer;
    transition: background 0.2s, transform 0.2s;
}

button:hover {
    background: #3730a3;
    transform: translateY(-2px);
}

.dots {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-top: 15px;
}

.dot {
    width: 12px;
    height: 12px;
    padding: 0;
    border-radius: 50%;
    background: #cbd5e1;
}

.dot.active {
    background: #4f46e5;
    transform: scale(1.2);
}

@media (max-width: 500px) {
    .gallery {
        padding: 15px;
    }

    #galleryImage {
        height: 250px;
    }

    h1 {
        font-size: 24px;
    }

    button {
        padding: 10px 12px;
        font-size: 14px;
    }
}

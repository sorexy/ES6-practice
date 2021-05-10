function getHttpObject() {
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    }
}

export { getHttpObject };

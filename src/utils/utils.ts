function capitalizeFirstWord(text: string): string {
    const words = text.split(' ');
    words[0] = words[0].charAt(0).toUpperCase() + words[0].substring(1);
    return words.join(' ');
}
export { capitalizeFirstWord };
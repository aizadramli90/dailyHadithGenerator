import hadiths from "./src/hadith.js"

function getDailyReminder() {
    const randomIndex = Math.floor(Math.random() * hadiths.length);
    return `Today Hadith: ${hadiths[randomIndex].text} (${hadiths[randomIndex].source})`;
}

console.log(getDailyReminder());
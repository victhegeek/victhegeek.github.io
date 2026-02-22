// Translations embedded directly in the code
const translations = {
    en: {
        "home_title": "PinSnippet",
        "tagline": "Enhance your coding with custom snippets in IntelliJ IDEA Based IDEs",
        "features_title": "Features",
        "feature_1": "Save selected code as a snippet with a name and shortcut.",
        "feature_2": "Insert snippets using code completion (type the shortcut).",
        "feature_3": "Manage your snippets in a simple JSON file via <em>Tools > Manage Snippets</em>.",
        "feature_4": "Create folders to group your snippets for better organization.",
        "download_title": "Download",
        "download_text": "Choose the version compatible with your IDE:",
        "download_button_1_0_1": "PinSnippet v1.0.1",
        "download_note_1_0_1": "Compatible with IntelliJ IDEA 2024.3.7 (Build #IC-243.28141.18, built on September 10, 2025)",
        "download_button_1_0_2": "PinSnippet v1.0.2",
        "download_note_1_0_2": "Compatible with OpenIDE 2025.1.3 (Build #IC-251.26927.53.3, built on August 22, 2025)",
        "installation_title": "How to Install",
        "install_step_1": "Download the plugin ZIP file using the links above.",
        "install_step_2": "In OpenIDE, go to <em>File > Settings > Plugins</em> (or <em>OpenIDE > Preferences > Plugins</em> on macOS).",
        "install_step_3": "Click the gear icon and select <em>Install Plugin from Disk</em>.",
        "install_step_4": "Choose the downloaded <code>PinSnippet-x.x.x.zip</code> file and click <em>OK</em>.",
        "install_step_5": "Restart OpenIDE to activate the plugin.",
        "eula_title": "PinSnippet EULA",
        "eula_english_title": "End User License Agreement",
        "eula_russian_title": "Лицензионное соглашение с конечным пользователем (Russian)",
        "about_title": "About PinSnippet",
        "full_description_title": "Full Description",
        "full_description_text": "PinSnippet is a lightweight plugin for OpenIDE that simplifies code management. Save code snippets locally, insert them via code completion, and organize them in folders. All data is stored in a JSON file on your device, with no metrics collection or registration required.",
        "technical_details_title": "Technical Details",
        "tech_detail_version": "Version: 1.0.2",
        "tech_detail_compatibility": "Compatibility: OpenIDE 2025.1.3 (Build #IC-251.26927.53.3, built on August 22, 2025)",
        "tech_detail_platform": "Platform: Windows x64 (tested on Windows 11 Pro 24H2)",
        "tech_detail_format": "Format: .jar",
        "downloads_title": "Downloads",
        "screenshots_title": "Screenshots",
        "screenshots_placeholder": "[Add screenshots of PinSnippet interface, e.g., Tools > Manage Snippets or code completion]",
        "nav_home": "Home",
        "nav_eula": "EULA",
        "nav_about": "About"
    },
    ru: {
        "home_title": "PinSnippet",
        "tagline": "Улучшайте кодирование с помощью пользовательских сниппетов в IDE на базе IntelliJ",
        "features_title": "Возможности",
        "feature_1": "Сохраняйте выделенный код в виде сниппета с названием и ярлыком.",
        "feature_2": "Вставляйте сниппеты через автодополнение кода (введите ярлык).",
        "feature_3": "Управляйте сниппетами в простом JSON-файле через <em>Tools > Manage Snippets</em>.",
        "feature_4": "Создавайте папки для группировки сниппетов для лучшей организации.",
        "download_title": "Скачать",
        "download_text": "Выберите версию, совместимую с вашей IDE:",
        "download_button_1_0_1": "PinSnippet v1.0.1",
        "download_note_1_0_1": "Совместимо с IntelliJ IDEA 2024.3.7 (Build #IC-243.28141.18, собрано 10 сентября 2025)",
        "download_button_1_0_2": "PinSnippet v1.0.2",
        "download_note_1_0_2": "Совместимо с OpenIDE 2025.1.3 (Build #IC-251.26927.53.3, собрано 22 августа 2025)",
        "installation_title": "Как установить",
        "install_step_1": "Скачайте ZIP-файл плагина по ссылкам выше.",
        "install_step_2": "В OpenIDE перейдите в <em>File > Settings > Plugins</em> (или <em>OpenIDE > Preferences > Plugins</em> на macOS).",
        "install_step_3": "Нажмите на значок шестерёнки и выберите <em>Install Plugin from Disk</em>.",
        "install_step_4": "Выберите скачанный файл <code>PinSnippet-x.x.x.zip</code> и нажмите <em>OK</em>.",
        "install_step_5": "Перезапустите OpenIDE для активации плагина.",
        "eula_title": "EULA для PinSnippet",
        "eula_english_title": "End User License Agreement (English)",
        "eula_russian_title": "Лицензионное соглашение с конечным пользователем",
        "about_title": "О PinSnippet",
        "full_description_title": "Полное описание",
        "full_description_text": "PinSnippet — это лёгкий плагин для OpenIDE, упрощающий управление кодом. Сохраняйте сниппеты локально, вставляйте их через автодополнение и организуйте в папки. Все данные хранятся в JSON-файле на вашем устройстве, без сбора метрик и необходимости регистрации.",
        "technical_details_title": "Технические детали",
        "tech_detail_version": "Версия: 1.0.2",
        "tech_detail_compatibility": "Совместимость: OpenIDE 2025.1.3 (Build #IC-251.26927.53.3, собрано 22 августа 2025)",
        "tech_detail_platform": "Платформа: Windows x64 (протестировано на Windows 11 Pro 24H2)",
        "tech_detail_format": "Формат: .jar",
        "downloads_title": "Загрузки",
        "screenshots_title": "Скриншоты",
        "screenshots_placeholder": "[Добавьте скриншоты интерфейса PinSnippet, например, Tools > Manage Snippets или автодополнение]",
        "nav_home": "Главная",
        "nav_eula": "Лицензия",
        "nav_about": "О плагине"
    }
};

// Apply translations to the page
function applyTranslations(lang) {
    console.log(`Applying translations for language: ${lang}`);
    const translation = translations[lang] || translations['en'];
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translation[key]) {
            element.innerHTML = translation[key];
        } else {
            console.warn(`Translation key "${key}" not found for language ${lang}`);
        }
    });
    // Show/hide EULA sections based on language
    const eulaEnglish = document.getElementById('eula-english');
    const eulaRussian = document.getElementById('eula-russian');
    if (eulaEnglish && eulaRussian) {
        console.log(`Setting EULA visibility: English=${lang === 'en' ? 'block' : 'none'}, Russian=${lang === 'ru' ? 'block' : 'none'}`);
        eulaEnglish.style.display = lang === 'en' ? 'block' : 'none';
        eulaRussian.style.display = lang === 'ru' ? 'block' : 'none';
    }
    // Update active language button style
    document.querySelectorAll('.language-button').forEach(button => {
        button.classList.toggle('active', button.getAttribute('data-lang') === lang);
    });
}

// Set language and save to localStorage
function setLanguage(lang) {
    console.log(`Setting language to: ${lang}`);
    localStorage.setItem('language', lang);
    applyTranslations(lang);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    console.log(`Initializing with language: ${savedLang}`);
    setLanguage(savedLang);

    // Add click event listeners to language buttons
    document.querySelectorAll('.language-button').forEach(button => {
        button.addEventListener('click', () => {
            const lang = button.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
});
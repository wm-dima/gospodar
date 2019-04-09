<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'gospodar' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'root' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', '' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'HXr2Y1&M+zs!hBq-G+ghqbgB9j_aW3Y#7~,# Dq`L0ZOeau-4KSj(BbkOA| $h!W' );
define( 'SECURE_AUTH_KEY',  '6]mCp3TK[?!.R#d/mzL+j7X|$m)C_c_$pjX[WF<{2k9$8uD<`;9<wep[6MR`r9qC' );
define( 'LOGGED_IN_KEY',    'RYm{[*V9zodZ,!XHrF&.LY7Z&8xAM$D_!6&PRYg?H3i7[&$EyXR5fjGK_J;GP`$$' );
define( 'NONCE_KEY',        'jMSI;xMN0=Ad>kQ~oap=;ms!lIg)i}L>+c9W2Y:pRCrfm/bX;#k{DKi=rTH^~HSE' );
define( 'AUTH_SALT',        '?Z&`qH`ozVM0Kz+d/31zain`}<}6a)Q7`EZZ[Wsyp5z_QPZrcH9$g6YU=Ib5r7ro' );
define( 'SECURE_AUTH_SALT', 'E|+V0d2MU7X[;,n*LE&_[+<${xFRJXTqN<2*&vKT7<DUkQLTrbS6sfb^kHf,oE87' );
define( 'LOGGED_IN_SALT',   '83-Q?!jYO|=:n<bcS3k!,Hr2pG<ajoB7Drc>.r*dfa57EotzB!r&LcSvFz^@_9jS' );
define( 'NONCE_SALT',       '_W8z7oq2]`juI+.L7#TpX@<A(qe:I:jyynn.;8.0j M.d}m WRrxrKKN(TcEk[3J' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );

define('WPLANG', 'ru_RU');

define('WP_DEBUG', true); // enable debugging mode


# For Persian Calendar
thanks a lot from [gianlucaparadise](https://github.com/gianlucaparadise).
i use [moment-jalaali](https://github.com/jalaali/moment-jalaali) as persian calendar.
but this version of telegraf-persian-calender have some bug ,but work.
# telegraf-calendar-telegram
Inline calendar for Telegram bots using Telegraf framework.
You can test it using this [bot](t.me/CalendarTelegrafBot.).

Description
================
Using this simple inline calendar you can allow your Telegram bot to ask dates. This library is built using [Telegraf](https://github.com/telegraf/telegraf) Framework.

![Demo](https://github.com/gianlucaparadise/telegraf-calendar-telegram/blob/master/images/demo.gif "Demo")

Usage
================
Installation
---------------

```
npm i telegraf-calendar-telegram --save
```

Basic usage
---------------
```javascript
// create the bot
const bot = new Telegraf('your bot token');
// instantiate the calendar
const calendar = new Calendar(bot);

// listen for the selected date event
calendar.setDateListener((context, date) => context.reply(date));
// retreive the calendar HTML
bot.command("calendar", context => context.reply("Here you are", calendar.getCalendar()));
```

This creates a calendar with the default options: you will have an english calendar with Sunday as starting week day.

Customization
---------------
When you instantiate the calendar, you can pass an option object:

```javascript
const calendar = new Calendar(bot, {
	startWeekDay: 0,
	weekDayNames: ["یک", "دو", "سه", "چهار", "پنج", "جمعه", "ش"],
	monthNames: [
		"فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
		"مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
	]
});
```

This creates an italian calendar.

Default options:

```javascript
{
	startWeekDay: 0,
	weekDayNames: ["S", "M", "T", "W", "T", "F", "S"],
	monthNames: [
		"Jan", "Feb", "Mar", "Apr", "May", "Jun",
		"Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
	],
	minDate: null,
	maxDate: null
}
```

The `options` object has the following properties:

- `startWeekDay`: first day of the week, where 0 is Sunday
- `weekDayNames`: week day names, where the first element is `startWeekDay` name
- `monthNames`: month names
- `minDate`: minimum selectable date (there is a setter on Calendar object, too)
- `maxDate`: maximum selectable date (there is a setter on Calendar object, too)


Example
-----------

You can find [here](./bot/index.js) the code for a working [bot](t.me/CalendarTelegrafBot.).

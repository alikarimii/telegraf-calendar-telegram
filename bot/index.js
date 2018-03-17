const Calendar = require('../');
var moment = require('moment-jalaali');
const Telegraf = require('telegraf');
// create the bot
const bot = new Telegraf('your bot token');

// instantiate the calendar
const calendar = new Calendar(bot, {
	startWeekDay: 0,
	weekDayNames: ["یک", "دو", "سه", "چهار", "پنج", "جمعه", "ش"],
	monthNames: [
		"فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور",
		"مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"
	]
});

// listen for the selected date event
calendar.setDateListener((context, date) => context.reply(date));
// retreive the calendar HTML
bot.command("calendar", context => {

	const today = moment();
	const minDate = moment();
	minDate.month(today.month() - 2);
	const maxDate = moment();
	maxDate.month(today.month() + 2);

	context.reply("Here you are", calendar.setMinDate(minDate).setMaxDate(maxDate).getCalendar())
});

bot.startPolling();
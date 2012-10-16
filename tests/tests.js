/**
 * DateRange.js Unit Tests
 */

describe("DateRange.lastDays", function() {
	
	it("should return yesterday for 1", function() {
		var dateRange = new DateRange(new Date('2012-01-01T01:32:53.045Z')).lastDays(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2011-12-31T00:00:00.000Z');
		expect(to.toISOString()).toBe('2011-12-31T23:59:59.000Z');
	});
	
	it("should return last 7 days for 7", function() {
		var dateRange = new DateRange(new Date('2012-01-01T01:32:53.045Z')).lastDays(7);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2011-12-25T00:00:00.000Z');
		expect(to.toISOString()).toBe('2011-12-31T23:59:59.000Z');
	});
	
});

describe("DateRange.lastDaysInclCurrent", function() {
	
	it("should return today for 1", function() {
		var dateRange = new DateRange(new Date('2012-01-01T01:32:53.045Z')).lastDaysInclCurrent(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-01-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-01-01T23:59:59.000Z');
	});
	
	it("should return last 6 days and today for 7", function() {
		var dateRange = new DateRange(new Date('2012-01-01T01:32:53.045Z')).lastDaysInclCurrent(7);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2011-12-26T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-01-01T23:59:59.000Z');
	});
	
});

describe("DateRange.getBeginningOfWeek", function() {
	
	it("should return Monday", function() {
		var dates = [];
		dates.push(new DateRange(new Date('2012-10-08T00:32:53.045Z')).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-09T01:32:53.045Z')).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-10T23:32:53.045Z')).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-11T23:32:53.045Z')).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-12T23:32:53.045Z')).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-13T23:32:53.045Z')).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-14T23:59:59.999Z')).getBeginningOfWeek().toISOString());
		
		expect(dates).toEqual(['2012-10-08T00:00:00.000Z','2012-10-08T00:00:00.000Z','2012-10-08T00:00:00.000Z','2012-10-08T00:00:00.000Z','2012-10-08T00:00:00.000Z','2012-10-08T00:00:00.000Z','2012-10-08T00:00:00.000Z']);
		
		dates = [];
		dates.push(new DateRange(new Date('2012-10-15T00:32:53.045Z')).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-16T01:32:53.045Z')).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-17T23:32:53.045Z')).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-18T23:32:53.045Z')).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-19T23:32:53.045Z')).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-20T23:32:53.045Z')).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-21T23:59:59.999Z')).getBeginningOfWeek().toISOString());
		
		expect(dates).toEqual(['2012-10-15T00:00:00.000Z','2012-10-15T00:00:00.000Z','2012-10-15T00:00:00.000Z','2012-10-15T00:00:00.000Z','2012-10-15T00:00:00.000Z','2012-10-15T00:00:00.000Z','2012-10-15T00:00:00.000Z']);
	});
	
	it("should return Sunday", function() {
		var dates = [];
		dates.push(new DateRange(new Date('2012-10-07T23:59:59.999Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-08T00:32:53.045Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-09T01:32:53.045Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-10T23:32:53.045Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-11T23:32:53.045Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-12T23:32:53.045Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-13T23:32:53.045Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		
		expect(dates).toEqual(['2012-10-07T00:00:00.000Z','2012-10-07T00:00:00.000Z','2012-10-07T00:00:00.000Z','2012-10-07T00:00:00.000Z','2012-10-07T00:00:00.000Z','2012-10-07T00:00:00.000Z','2012-10-07T00:00:00.000Z']);
		
		dates = [];
		dates.push(new DateRange(new Date('2012-10-14T23:59:59.999Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-15T00:32:53.045Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-16T01:32:53.045Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-17T23:32:53.045Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-18T23:32:53.045Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-19T23:32:53.045Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		dates.push(new DateRange(new Date('2012-10-20T23:32:53.045Z')).setFirstDayOfWeek(0).getBeginningOfWeek().toISOString());
		
		expect(dates).toEqual(['2012-10-14T00:00:00.000Z','2012-10-14T00:00:00.000Z','2012-10-14T00:00:00.000Z','2012-10-14T00:00:00.000Z','2012-10-14T00:00:00.000Z','2012-10-14T00:00:00.000Z','2012-10-14T00:00:00.000Z']);
	});
	
});

describe("DateRange.lastWeeks", function() {
	
	it("should return last week for 1", function() {
		var dateRange = new DateRange(new Date('2012-10-15T01:32:53.045Z')).lastWeeks(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-10-08T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-10-14T23:59:59.000Z');
	});
	
	it("should return 4 last weeks for 4", function() {
		var dateRange = new DateRange(new Date('2012-10-21T01:32:53.045Z')).lastWeeks(4);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-09-17T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-10-14T23:59:59.000Z');
	});
	
	it("should return last week (beginning by Sunday) for 1", function() {
		var dateRange = new DateRange(new Date('2012-10-15T01:32:53.045Z')).setFirstDayOfWeek(0).lastWeeks(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-10-07T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-10-13T23:59:59.000Z');
	});
	
});

describe("DateRange.lastWeeksInclCurrent", function() {
	
	it("should return this week for 1", function() {
		var dateRange = new DateRange(new Date('2012-10-15T01:32:53.045Z')).lastWeeksInclCurrent(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-10-15T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-10-21T23:59:59.000Z');
	});
	
	it("should return 4 last weeks including current for 4", function() {
		var dateRange = new DateRange(new Date('2012-10-21T01:32:53.045Z')).lastWeeksInclCurrent(4);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-09-24T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-10-21T23:59:59.000Z');
	});
	
	it("should return last week (beginning by Sunday) for 1", function() {
		var dateRange = new DateRange(new Date('2012-10-15T01:32:53.045Z')).setFirstDayOfWeek(0).lastWeeksInclCurrent(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-10-14T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-10-20T23:59:59.000Z');
	});
	
});

describe("DateRange.lastWeeksWTY", function() {
	
	it("should return last week + WTD for 1", function() {
		var dateRange = new DateRange(new Date('2012-10-16T01:32:53.045Z')).lastWeeksWTY(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-10-08T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-10-15T23:59:59.000Z');
	});
	
});

describe("DateRange.lastMonths", function() {
	
	it("should return last month for 1", function() {
		var dateRange = new DateRange(new Date('2012-10-15T01:32:53.045Z')).lastMonths(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-09-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-09-30T23:59:59.000Z');
	});
	
	it("should return 2 last months for 2", function() {
		var dateRange = new DateRange(new Date('2012-10-21T01:32:53.045Z')).lastMonths(2);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-08-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-09-30T23:59:59.000Z');
	});
		
});

describe("DateRange.lastMonthsInclCurrent", function() {
	
	it("should return this month for 1", function() {
		var dateRange = new DateRange(new Date('2012-10-31T01:32:53.045Z')).lastMonthsInclCurrent(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-10-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-10-31T23:59:59.000Z');
	});
	
	it("should return last months and current for 2", function() {
		var dateRange = new DateRange(new Date('2012-10-21T01:32:53.045Z')).lastMonthsInclCurrent(2);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-09-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-10-31T23:59:59.000Z');
	});
	
	it("should return 2 last months and current for 3", function() {
		var dateRange = new DateRange(new Date('2012-10-21T01:32:53.045Z')).lastMonthsInclCurrent(3);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-08-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-10-31T23:59:59.000Z');
	});
		
});

describe("DateRange.lastMonthsMTY", function() {
	
	it("should return last month for 1", function() {
		var dateRange = new DateRange(new Date('2012-10-15T01:32:53.045Z')).lastMonthsMTY(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-09-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-10-14T23:59:59.000Z');
	});
	
});

describe("DateRange.lastQuarters", function() {
	
	it("should return 1st quarter for 15/04", function() {
		var dateRange = new DateRange(new Date('2012-04-15T01:32:53.045Z')).lastQuarters(1)
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-01-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-03-31T23:59:59.000Z');
	});
	
	it("should return 2nd quarter for 15/07", function() {
		var dateRange = new DateRange(new Date('2012-07-15T01:32:53.045Z')).lastQuarters(1)
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-04-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-06-30T23:59:59.000Z');
	});
	
	it("should return 3rd quarter for 15/12", function() {
		var dateRange = new DateRange(new Date('2012-12-15T01:32:53.045Z')).lastQuarters(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-07-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-09-30T23:59:59.000Z');
	});
	
	it("should return 4th quarter for 01/01", function() {
		var dateRange = new DateRange(new Date('2012-01-01T00:00:00.000Z')).lastQuarters(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2011-10-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2011-12-31T23:59:59.000Z');
	});
	
	
	it("should return 3rd-4th quarter for 01/01 and 2", function() {
		var dateRange = new DateRange(new Date('2012-01-01T00:00:00.000Z')).lastQuarters(2);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2011-07-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2011-12-31T23:59:59.000Z');
	});
	
	it("should return 2 years for 01/01 and 8", function() {
		var dateRange = new DateRange(new Date('2013-01-01T00:00:00.000Z')).lastQuarters(8);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2011-01-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-12-31T23:59:59.000Z');
	});
	
});

describe("DateRange.lastQuartersInclCurrent", function() {
	
	it("should return 2 years for 01/01 and 8", function() {
		var dateRange = new DateRange(new Date('2012-12-12T00:00:00.000Z')).lastQuartersInclCurrent(8);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2011-01-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-12-31T23:59:59.000Z');
	});
	
});

describe("DateRange.lastQuartersQTY", function() {
	
	it("should return 1st quarter + QTY for 15/04", function() {
		var dateRange = new DateRange(new Date('2012-04-15T01:32:53.045Z')).lastQuartersQTY(1)
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2012-01-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-04-14T23:59:59.000Z');
	});
	
});

describe("DateRange.lastYears", function() {
	
	it("should return last year for 1", function() {
		var dateRange = new DateRange(new Date('2012-10-15T01:32:53.045Z')).lastYears(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2011-01-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2011-12-31T23:59:59.000Z');
	});
	
	it("should return 2 last years for 2", function() {
		var dateRange = new DateRange(new Date('2012-10-21T01:32:53.045Z')).lastYears(2);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2010-01-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2011-12-31T23:59:59.000Z');
	});
		
});

describe("DateRange.lastYearsInclCurrent", function() {
	
	it("should return this year for 1", function() {
		var dateRange = new DateRange(new Date('2000-10-15T01:32:53.045Z')).lastYearsInclCurrent(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2000-01-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2000-12-31T23:59:59.000Z');
	});
	
	it("should return 1 last year + current for 2", function() {
		var dateRange = new DateRange(new Date('2012-10-21T01:32:53.045Z')).lastYearsInclCurrent(2);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2011-01-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-12-31T23:59:59.000Z');
	});
		
});

describe("DateRange.lastYearsYTY", function() {
	
	it("should return last year + YTY for 1", function() {
		var dateRange = new DateRange(new Date('2012-10-15T01:32:53.045Z')).lastYearsYTY(1);
		var from = dateRange.getFrom();
		var to = dateRange.getTo();
		
		expect(from.toISOString()).toBe('2011-01-01T00:00:00.000Z');
		expect(to.toISOString()).toBe('2012-10-14T23:59:59.000Z');
	});
	
});

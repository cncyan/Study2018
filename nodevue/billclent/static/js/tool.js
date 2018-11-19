(
    function(win,doc){
        function Bill(maincon){
            this.maincon=maincon
        }
        Bill.prototype.format=function(date){
            var fodate=new Date(date)
            var foyear=fodate.getFullYear()
            var fomonth=fodate.getMonth()
            var foday=fodate.getDay()

            var resule=foyear+"-"+fomonth+"-"+foday
            return resule
        }
        win.billsdk=new Bill()
    }
)(window,document)

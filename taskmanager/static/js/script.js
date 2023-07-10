document.addEventListener('DOMContentLoaded', function () {
    // sidenav Initialization
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // datepicker Initialization
    var datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker,{
        format: "dd mmmm, yyyy",
        i18n: {done: "Select"}
    });

    // select Initialization
    var selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);
    
    // collapsible Initialization
    var collapsibles = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapsibles);
});
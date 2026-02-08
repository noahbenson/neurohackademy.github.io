const ccsel_year_checkboxes = Array.from(document.getElementsByName('cc-sel-year'));
const ccsel_year_allbox = ccsel_year_checkboxes.find(item => item.value == "all");
const ccsel_year_nonebox = ccsel_year_checkboxes.find(item => item.value == "none");
const ccsel_year_normboxes = Array.from(
    ccsel_year_checkboxes.filter(
        item => item.value != "all" && item.value != "none"));
const ccsel_year_dict = Object.fromEntries(
    Array.from(
        ccsel_year_normboxes.map(
            (cb) => {
                // all years should be selected initially except none.
                cb.checked = true;
                return [
                    cb.value,
                    [cb, document.getElementById("cc-year-div-" + cb.value)]];
            })));
ccsel_year_allbox.checked = true;

const ccsel_year_updateRows = () => {
    // First update all and none selections.
    allsel = true;
    nonesel = true;
    ccsel_year_normboxes.forEach(
        (cb) => {
            allsel = allsel && cb.checked;
            nonesel = nonesel && !cb.checked;
        });
    ccsel_year_allbox.checked = allsel;
    ccsel_year_nonebox.checked = nonesel;
    // now update the divs.
    for (const [key, [cb, yeardiv]] of Object.entries(ccsel_year_dict)) {
        if (cb.checked) {
            yeardiv.style.display = 'block';
        } else {
            yeardiv.style.display = 'none';
        }
    }
};

ccsel_year_normboxes.forEach(
    (cb) => {
        cb.addEventListener('change', ccsel_year_updateRows);
    });
ccsel_year_allbox.addEventListener(
    'change',
    () => {
        const ch = ccsel_year_allbox.checked;
        ccsel_year_normboxes.forEach((cb) => { cb.checked = ch; });
        ccsel_year_updateRows();
    });
ccsel_year_nonebox.addEventListener(
    'change',
    () => {
        const ch = !ccsel_year_nonebox.checked;
        ccsel_year_normboxes.forEach((cb) => { cb.checked = ch; });
        ccsel_year_updateRows();
    });

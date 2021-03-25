export default function data_cleaner(data) {
    let washington_flag = false
    let itemid=0

    const cleanedData = data.filter(item => {
        if (item['Staff Log'] === "Washington") {
            washington_flag = true
        }
        if (washington_flag === false) {
            return
        }
        if (item['Staff Log'] === "Name" || item['Staff Log'] === "") {
            return
        }
        if (Object.keys(item).length === 27 && item['__EMPTY_1'] !== "Don't Assign") {
            return item
        }
        return
    }).map(item => {
        itemid++
        return {
            id:itemid,
            Name:item['Staff Log'],
            Status:item['__EMPTY'],
            Map_Status:item['__EMPTY_1'],
            Rating:item['__EMPTY_2'],
            Late:item['__EMPTY_3'],
            Missed:item['__EMPTY_4'],
            Last_Second_Callout:item['__EMPTY_5'],
            Scout:item['__EMPTY_6'],
            Availability:item['__EMPTY_7'],
            Transportation:item['__EMPTY_8'],
            Areas:item['__EMPTY_9'],
            Email:item['__EMPTY_10'],
            Phone:item['__EMPTY_11'],
            Address:item['__EMPTY_12'],
            Walk:item['__EMPTY_13'],
            Wknd:item['__EMPTY_14'],
            Wkdy:item['__EMPTY_15'],
            Board:item['__EMPTY_16'],
            Sit:item['__EMPTY_17'],
            Park:item['__EMPTY_18'],
            Taxi:item['__EMPTY_19'],
            Brd_Num:item['__EMPTY_20'],
            Holiday:item['__EMPTY_21'],
            Hire_Date:item['__EMPTY_22'],
            Last_Day:item['__EMPTY_23'],
            Create:item['__EMPTY_24'],
            Modify:item['__EMPTY_25'],
        }
    })
    return(cleanedData)
}
// raw data shape
// Staff Log: "Name"
// __EMPTY: "Status"
// __EMPTY_1: "Map Status"
// __EMPTY_2: "Rating"
// __EMPTY_3: "Late"
// __EMPTY_4: "Missed"
// __EMPTY_5: "Last Second Callout"
// __EMPTY_6: "Scout"
// __EMPTY_7: "Availability"
// __EMPTY_8: "Transportation"
// __EMPTY_9: "Areas"
// __EMPTY_10: "E-mail"
// __EMPTY_11: "Phone"
// __EMPTY_12: "Address"
// __EMPTY_13: "Walk"
// __EMPTY_14: "Wknd"
// __EMPTY_15: "Wkdy"
// __EMPTY_16: "Board"
// __EMPTY_17: "Sit"
// __EMPTY_18: "Park"
// __EMPTY_19: "Taxi"
// __EMPTY_20: "Brd #"
// __EMPTY_21: "Holiday"
// __EMPTY_22: "Hire Date"
// __EMPTY_23: "Last Day"
// __EMPTY_24: "Create"
// __EMPTY_25: "Modify"
export default function data_cleaner(data){
    let washington_flag=false

    const cleanedData = data.map(item=>{
        // if(item['Staff Log'])
        if(washington_flag === false){
            return
        }
    })
}
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
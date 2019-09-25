const SET_DASHBOARDCARDS = 'SET_DASHBOARDCARDS';

function setDashboardCards(totalCall, call1, call2, totalNumber, number1, number2, totalSub, sub1, sub2, totalFailed, failed1, failed2){
    return {
        type: SET_DASHBOARDCARDS,
        cards: {
            totalCall,
            call1,
            call2,
            totalNumber,
            number1,
            number2,
            totalSub,
            sub1,
            sub2,
            totalFailed,
            failed1,
            failed2
        }

    }
}

export default setDashboardCards;
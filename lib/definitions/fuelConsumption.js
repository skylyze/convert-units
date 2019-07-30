var metric
    , imperial;

// constants to be reused in this file.    
var MPG_US_FACTOR = 235.215;
var MPG_UK_FACTOR = 282.481;

metric = {
    'l/100km': {
        name: {
            singular: 'liter per 100 kilometers',
            plural: 'liters per 100 kilometers'
        }
        , to_anchor: 1
    },
    'l/km': {
        name: {
            singular: 'liter per kilometer',
            plural: 'liters per kilometer'
        }
        , to_anchor: 100
    },
    'l/m': {
        name: {
            singular: 'liter per meter',
            plural: 'liters per meter'
        }
        , to_anchor: 100000
    }
};

imperial = {
    'mpg': {
        name: {
            singular: 'mile per galon (US)',
            plural: 'miles per galon (US)'
        }
        , to_anchor: 1
    },
    'mpg-us': {
        name: {
            singular: 'mile per galon (US)',
            plural: 'miles per galon (US)'
        }
        , to_anchor: 1
    },
    'mpg-uk': {
        name: {
            singular: 'mile per galon (UK)',
            plural: 'miles per galon (UK)'
        }
        , to_anchor: (MPG_US_FACTOR / MPG_UK_FACTOR)
    }
};

module.exports = {
    metric: metric
    , imperial: imperial
    , _anchors: {
        metric: {
            unit: 'l/100km'
            , transform: function (miles) { return MPG_US_FACTOR / miles }
        }
        , imperial: {
            unit: 'mpg'
            , transform: function (l) { return MPG_US_FACTOR / l }
        }
    }
};

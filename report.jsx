var React = require('react')
var ReactPivot = require('react-pivot')
var createReactClass = require('create-react-class')

var rows = require('./data.json')

var dimensions = [
  { value: 'host', title: 'Host' },
  { value: 'date', title: 'Date' },
]

var reduce = function(row, item) {
  item.impressions = (item.impressions || 0) + (row.type === 'impression' ? 1 : 0)
  item.loads = (item.loads || 0) + (row.type === 'load' ? 1 : 0)
  item.displays = (item.displays || 0) + (row.type === 'display' ? 1 : 0)
  item.loadRate = (!item.impressions ? 0 : ((item.loads * 100) / item.impressions).toFixed(1)) + '%'
  item.displayRate = (!item.loads ? 0 : ((item.displays * 100) / item.loads).toFixed(1)) + '%'
  return item
}

var calculations = [
  {
    title: 'Impressions', value: 'impressions',
    template: function(val, row) {
      return val
    }
  },
  {
    title: 'Loads', value: 'loads',
    template: function(val, row) {
      return val
    }
  },
  {
    title: 'Displays', value: 'displays',
    template: function(val, row) {
      return val
    }
  },
  {
    title: 'Load Rate', value: 'loadRate',
    template: function(val, row) {
      return val
    }
  },
  {
    title: 'Display Rate', value: 'displayRate',
    template: function(val, row) {
      return val
    }
  },
]

module.exports = createReactClass({
  render () {
    return <ReactPivot
      rows={rows}
      dimensions={dimensions}
      reduce={reduce}
      calculations={calculations}
      nPaginateRows={25}
    />
  }
})

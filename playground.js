import SolarWinds from './src'
import Table from 'easy-table'

const solarwinds = new SolarWinds()

async function app() {
  try {
    // const vms = await solarwinds.virtualMachines.query()
    // const find = await solarwinds.virtualMachines.find(vms[144]['virtualMachineID'])
    // const vms = await solarwinds.virtualMachines.filterIp('1')
    // const table = new Table()
    //
    // vms.forEach(vm => {
    //   table.cell('ID', vm.virtualMachineID)
    //   table.cell('NAME', vm.name)
    //   table.cell('IP', vm.iPAddress)
    //   table.cell('OS', vm.os())
    //   table.newRow()
    // })
    // const node = await solarwinds.nodes.create({
    //   name: 'DevDocker03',
    //   ip: '10.0.8.162',
    // })
    // await solarwinds.nodes.remove(403)
    // const nodes = await solarwinds.nodes.query()
    // const appTemplates = await solarwinds.applicationTemplates.query()
    // const credentials = await solarwinds.credentials.query()
    // const credential = await solarwinds.credentials.findByName('wb2')
    // const appTemplate = await solarwinds.applicationTemplates.find(94)
    // const appTemplate = await solarwinds.applicationTemplates.findByName('COS Linux Basic Processes')
    // const nodes = await solarwinds.nodes.remanage(403)
    // const node = await solarwinds.nodes.find(403)
    // node.unmanage(1)
    // console.log(table.toString())
  } catch (err) {
    console.error(err)
  }
}

app()

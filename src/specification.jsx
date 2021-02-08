import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, description) {
  return { name, description };
}

const rows = [
  createData('Processor & Memory', <div>
    <ul>
      <li>ARM9 processor with 32-Bit Arm & 16-Bit Thumb instruction sets
          <ul>
            <li>
              400 MHz
            </li>
            <li>
              16K Data Cache
            </li>
            <li>
              256 MB Flash Memory
            </li>
            <li>
              16K Instruction Cache
            </li>
            <li>
              128X16M DDR RAM
            </li>
          </ul>
      </li>
    </ul>
  </div>),
  createData('Packet Data','Up to 100 Mbps downlink, Up to 50 Mbps uplink'),
  createData('radio Frequency',<div>
    LoRa
    <ul>
      <li>
        a proprietary Digital Spread Spectrum technique
      </li>
      <li>
        8-Channel Gateway
      </li>
      <li>
        2 x 8-Channel Optional
      </li>
    </ul>
  </div>),
  createData('GNSS/GPS',<div>
    <ul>
      <li>
        72-channel u-blox M8 engine
      </li>
      <li>
        GPS, GLONASS, Galileo, BeiDou, QZSS and SBAS
      </li>
      <li>
        3 Concurrent GNSS 
      </li>
      <li>
        Standard Precision GNSS
      </li>
    </ul>
  </div>
  ),
  // createData('Antennas','LoRa<br/> Omni-directional radiation pattern for 360⁰ / 3 dBi gain / Vertical polarization / Weight: 25.6 grams / 1/8 wavelength dipole configuration / Dimensions: 195 ± 2 x 13mm / Frequency Range: 868-928 MHz / Reverse SMA Male connector GNSS/GPS Magnet mount / Input Voltage: 3.0V±0.3V / Power Consumption: 15mA Typical (+25⁰C±5⁰C) 20mA Max (-40⁰C≈+85⁰C) / Cable: 1.5DS-QEHV (TA) 5m:Black / Gain: 90⁰: 3.0dBi MIN 20⁰ -5.0dBi MIN / Polarization: RHCP / Output Connector: SMA-SP-1.5DQEHV / Weight: 25g w/o cable / Frequency Range: 1.575.42±1.023 MHz /'),
  createData('Antennas', <div>
    <ol>
      <li>LoRa
        <ul>
          <li>
            Omni-directional radiation pattern for 360⁰
          </li>
          <li>
            3 dBi gain / Vertical polarization
          </li>
          <li>
            Weight: 25.6 grams
          </li>
          <li>
            1/8 wavelength dipole configuration
          </li>
          <li>
            Dimensions: 195 ± 2 x 13mm
          </li>
          <li>
            Frequency Range: 868-928 MHz
          </li>
          <li>
            Reverse SMA Male connector
          </li>
        </ul>
      </li>
      <li>GNSS/GPS Magnet mount
        <ul>
          <li>
            Input Voltage: 3.0V±0.3V
          </li>
          <li>
          Power Consumption: 15mA Typical (+25⁰C±5⁰C) 20mA Max (-40⁰C≈+85⁰C) 
          </li>
          <li>
          Cable: 1.5DS-QEHV (TA) 5m:Black
          </li>
          <li>
          Gain: 90⁰: 3.0dBi MIN 20⁰ -5.0dBi MIN  
          </li>
          <li>
          Polarization: RHCP
          </li>
          <li>
          Output Connector: SMA-SP-1.5DQEHV
          </li>
          <li>
          Weight: 25g w/o cable
          </li>
          <li>
          Frequency Range: 1.575.42±1.023 MHz 
          </li>
        </ul>
      </li>
    </ol>
  </div>),
  createData('LoRa Channel Plan Support','AS 920 – 925 MHz'),
  createData('LoRaWan Protocol Support','LoRaWAN 1.0, 1.0.1 and 1.02 supported / LoRaWAN 1.1 Support Q1, 2019'),
  createData('Transmit Power','14-25dbm'),
  createData('Sensitivity','-140dbm@SF12BW124kHz'),
  createData('Storage','Micro SD – 32 GB max size storage'),
  createData('Input Voltage','48V POE, IEEE 802.3af (PoE) and IEEE 802.3at (PoE+)'),
  createData('Power Consumption','10W'),
  createData(<div><h4>Connectors</h4></div>,''),
  createData('Ethernet','1 RJ45 Ethernet 10/100 Port POE'),
  createData(<div><h4>Physical Description</h4></div>,''),
  createData(<div>Dimensions with Antenna <br/>(L x W x H)</div>,'345 x 170 x 75'),
  createData(<div>Dimensions without Antenna<br/> (L x W x H)</div>,'255 x 170 x 75'),
  createData('Weight','1.5kg'),
  createData('Chassis Type','Alluminium'),
  createData(<div><h4>Enviromental</h4></div>,''),
  createData('Operating temperature','-30°C to +75°C'),
  createData('Storage Temperature','-40°C to +80°C'),
  createData('Relative Humidity','20% to 90%, non-considensing'),
  createData('WaterProof','IP67'),
  createData(<div><h4>Installation</h4></div>,''),
  createData('Mount Type','Pole mount / wall Mount'),
  createData('Country of Origin','Hong Kong')
];

export function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table" border='1' white-space="pre-wrap">
        <TableHead>
          <TableRow>
            <TableCell width="200px">Category</TableCell>
            <TableCell align="center">Description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DenseTable;
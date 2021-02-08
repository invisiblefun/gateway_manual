import React from 'react';
import "./custom.css";

export function DenseTable() {

  return (
    <table border="1">
        <thead >
            <tr >
                <th >Category</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
          <tr>
                <th>Processor & Memory</th>
                <td >
                    <div>
                        <ul>
                            <li>ARM9 processor with 32-Bit Arm &amp; 16-Bit Thumb instruction sets<ul>
                                    <li>400 MHz</li>
                                    <li>16K Data Cache</li>
                                    <li>256 MB Flash Memory</li>
                                    <li>16K Instruction Cache</li>
                                    <li>128X16M DDR RAM</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </td>
            </tr>
            <tr >
                <th>Packet Data
                </th>
                <td >Up to 100 Mbps
                    downlink, Up to 50 Mbps uplink</td>
            </tr>
            <tr >
                <th>radio
                    Frequency</th>
                <td >
                    <div>LoRa<ul>
                            <li>a proprietary Digital Spread Spectrum technique</li>
                            <li>8-Channel Gateway</li>
                            <li>2 x 8-Channel Optional</li>
                        </ul>
                    </div>
                </td>
            </tr>
            <tr >
                <th>GNSS/GPS</th>
                <td >
                    <div>
                        <ul>
                            <li>72-channel u-blox M8 engine</li>
                            <li>GPS, GLONASS, Galileo, BeiDou, QZSS and SBAS</li>
                            <li>3 Concurrent GNSS</li>
                            <li>Standard Precision GNSS</li>
                        </ul>
                    </div>
                </td>
            </tr>
            <tr >
                <th>Antennas</th>
                <td >
                    <div>
                        <ol>
                            <li>LoRa<ul>
                                    <li>Omni-directional radiation pattern for 360⁰</li>
                                    <li>3 dBi gain / Vertical polarization</li>
                                    <li>Weight: 25.6 grams</li>
                                    <li>1/8 wavelength dipole configuration</li>
                                    <li>Dimensions: 195 ± 2 x 13mm</li>
                                    <li>Frequency Range: 868-928 MHz</li>
                                    <li>Reverse SMA Male connector</li>
                                </ul>
                            </li>
                            <li>GNSS/GPS Magnet mount<ul>
                                    <li>Input Voltage: 3.0V±0.3V</li>
                                    <li>Power Consumption: 15mA Typical (+25⁰C±5⁰C) 20mA Max (-40⁰C≈+85⁰C)</li>
                                    <li>Cable: 1.5DS-QEHV (TA) 5m:Black</li>
                                    <li>Gain: 90⁰: 3.0dBi MIN 20⁰ -5.0dBi MIN</li>
                                    <li>Polarization: RHCP</li>
                                    <li>Output Connector: SMA-SP-1.5DQEHV</li>
                                    <li>Weight: 25g w/o cable</li>
                                    <li>Frequency Range: 1.575.42±1.023 MHz</li>
                                </ul>
                            </li>
                        </ol>
                    </div>
                </td>
            </tr>
            <tr >
                <th>LoRa Channel
                    Plan Support</th>
                <td >AS 920 – 925
                    MHz</td>
            </tr>
            <tr >
                <th>LoRaWan
                    Protocol Support</th>
                <td >LoRaWAN 1.0,
                    1.0.1 and 1.02 supported / LoRaWAN 1.1 Support Q1, 2019</td>
            </tr>
            <tr >
                <th>Transmit
                    Power</th>
                <td >14-25dbm</td>
            </tr>
            <tr >
                <th>Sensitivity
                </th>
                <td >
                    -140dbm@SF12BW124kHz</td>
            </tr>
            <tr >
                <th>Storage</th>
                <td >Micro SD – 32
                    GB max size storage</td>
            </tr>
            <tr >
                <th>Input Voltage
                </th>
                <td >48V POE, IEEE
                    802.3af (PoE) and IEEE 802.3at (PoE+)</td>
            </tr>
            <tr >
                <th>Power
                    Consumption</th>
                <td >10W</td>
            </tr>
            <tr >
                <th colspan="2">
                    <div>
                        <h4>Connectors</h4>
                    </div>
                </th>
            </tr>
            <tr >
                <th>Ethernet</th>
                <td >1 RJ45
                    Ethernet 10/100 Port POE</td>
            </tr>
            <tr >
                <th colspan="2">
                    <div>
                        <h4>Physical Description</h4>
                    </div>
                </th>
            </tr>
            <tr >
               <th><div>Dimensions with Antenna <br/> (L x W x H)</div></th>
               <td>345 x 170 x 75</td>
            </tr>
            <tr >
                <th>
                    <div>Dimensions without Antenna<br/> (L x W x H)</div>
                </th>
                <td >255 x 170 x 75
                </td>
            </tr>
            <tr >
                <th>Weight</th>
                <td >1.5kg</td>
            </tr>
            <tr >
                <th>Chassis Type
                </th>
                <td >Alluminium
                </td>
            </tr>
            <tr >
                <th colspan="2">
                    <div>
                        <h4>Enviromental</h4>
                    </div>
                </th>
            </tr>
            <tr >
                <th>Operating
                    temperature</th>
                <td >-30°C to +75°C
                </td>
            </tr>
            <tr >
                <th>Storage
                    Temperature</th>
                <td >-40°C to +80°C
                </td>
            </tr>
            <tr >
                <th>Relative
                    Humidity</th>
                <td >20% to 90%,
                    non-considensing</td>
            </tr>
            <tr >
                <th>WaterProof
                </th>
                <td >IP67</td>
            </tr>
            <tr >
                <th colspan="2">
                    <div>
                        <h4>Installation</h4>
                    </div>
                </th>
            </tr>
            <tr >
                <th>Mount Type
                </th>
                <td >Pole mount /
                    wall Mount</td>
            </tr>
            <tr >
                <th>Country of
                    Origin</th>
                <td >Hong Kong</td>
            </tr>
        </tbody>
    </table>
  );
}

export default DenseTable;
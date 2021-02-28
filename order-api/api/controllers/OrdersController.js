/**
 * OrdersController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const csv = require('csv-parser');
const fs = require('fs');
let checkpoints = [];
const trackings = [];
const path = require('path');
const _ = require('lodash');


fs.createReadStream(path.join(__dirname, '../csv/', 'checkpoints.csv'))
  .pipe(csv({separator: '\;'}))
  .on('data', (data) => checkpoints.push(data))
  .on('end', () => {
    // console.log(checkpoints);

  });

fs.createReadStream(path.join(__dirname, '../csv/', 'trackings.csv'))
  .pipe(csv({separator: '\;'}))
  .on('data', (data) => trackings.push(data))
  .on('end', () => {
    // console.log(trackings);

  });
module.exports = {

  Orders: async function (req, res) {
    sails.log.info(req.query);
    sails.log.info(trackings);
    sails.log.info(checkpoints);
    if (req.body.email) {
      let _trackings = [];
      trackings.forEach((order) => {
        if (order.email === req.body.email) {
          _trackings.push(order);
        }
      });
      return res.json(_trackings);
    } else {
      return res.json({
        Error: 'Email is not provided'
      });
    }
  },
  Order: async function (req, res) {

    let checkpointsSorted = _.sortBy(checkpoints, 'timestamp').reverse();
    if (req.body.id) {
      let _details = [];
      checkpointsSorted.forEach((check) => {
        if (check.tracking_number === req.body.id) {
          _details.push(check);
        }
      });
      return res.json(_details);
    } else {
      return res.json({
        Error: 'Id is not specified'
      });
    }
  }


  // /**
  //  * find
  //  * @param req
  //  * @param res
  //  * @returns {Promise<*|Promise<any>>}
  //  */
  // search: async function (req, res) {
  //   sails.log.info(req.query);
  //   if (req.query.startDate && req.query.endDate) {
  //     let users;
  //     try {
  //       users = await Users.find({
  //         createdAt: {'>': new Date(req.query.startDate), '<': new Date(req.query.endDate)}
  //       });
  //       return res.json(users);
  //     } catch (e) {
  //       return res.json({
  //         Error: 'Is not valid'
  //       });
  //     }
  //
  //   } else {
  //     return res.json({
  //       Error: 'Start and end date is not provided'
  //     });
  //   }
  //
  // }
};


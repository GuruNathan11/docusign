const envelopesService = require('../services/envelopesService.js');

exports.createEnvelope = async (req, res) => {
  try {
    const { documentPath, email, name } = req.body;
    const envelope = await envelopesService.createEnvelope(documentPath, email, name);
    res.status(201).json(envelope);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

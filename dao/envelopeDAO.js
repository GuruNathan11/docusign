const baseUrl = "https://demo.docusign.net/restapi";
const apiVersion = "v2.1";
const accountId = "dc02ffd0-684b-4994-82c7-eac60ee358be"
const accessToken = "eyJ0eXAiOiJNVCIsImFsZyI6IlJTMjU2Iiwia2lkIjoiNjgxODVmZjEtNGU1MS00Y2U5LWFmMWMtNjg5ODEyMjAzMzE3In0.AQoAAAABAAUABwAA7JcfTTrbSAgAACy7LZA620gCAAhnpshLtg5LpZuzs5bdODcVAAEAAAAYAAEAAAAFAAAADQAkAAAAMzQ4ODkzNGEtYzUxNy00NWNhLTg1MzMtZTI0ZjFiNjFmYjlhIgAkAAAAMzQ4ODkzNGEtYzUxNy00NWNhLTg1MzMtZTI0ZjFiNjFmYjlhMAAAWmzPSzrbSDcAu7tNuJ5-7UCZmu7ocl_Azw.yMYXw_QyZrLVLBLQrvYu6dQ68TVRIOBXntcaphetI-8T11Oj8rUJZFnID6wx2hq2rz5-3Gkg9A7XdgblQmecLG0-PorBuFtPE2bfw8Y1eBJ_y-ujZcZyKYeaZKH21Dy0RdUOWoQmqlcWioY1Ih0g6joS8zpLp-UdAmvryPCqh67rsksm2Hqn47fy_eGm3-mbu7Vy78d7D3Santh77frL-0u1WeqifyS6jaGFvGdt7-1Hxkjv3LLMXxRwiIahLgQMB7nsP38kf5hHL3yd9aeArxoxlrm3R8fXFLBSVdxYs1mftSP-dklE3L4hwQWBq8ktWwI3E8ricWr3aFYpA1vbIg"

exports.getEnvelopeApiUrl = () => `${baseUrl}/${apiVersion}/accounts/${accountId}/envelopes`;

exports.getEnvelopeApiHeaders = () => ({
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${accessToken}`
});

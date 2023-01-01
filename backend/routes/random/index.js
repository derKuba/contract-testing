const randomJSON = [
  {
    _id: "63b17cafa115a1682550035e",
    index: 0,
    guid: "2a5e6a78-e7d1-4121-8e00-af190cc5577b",
    isActive: true,
    balance: "$3,672.50",
    picture: "http://placehold.it/32x32",
    age: 39,
  },
  {
    _id: "63b17caf1194ef72b783b01c",
    index: 1,
    guid: "9d3cad41-a725-4191-ac5b-6cdc3003bc42",
    isActive: false,
    balance: "$2,435.63",
    picture: "http://placehold.it/32x32",
    age: 28,
  },
  {
    _id: "63b17caffe03060987010558",
    index: 2,
    guid: "ab7d421f-a5ea-4abc-aac3-504ae4e01654",
    isActive: true,
    balance: "$2,241.09",
    picture: "http://placehold.it/32x32",
    age: 33,
  },
  {
    _id: "63b17caf714f4115caeee1be",
    index: 3,
    guid: "f2536f0e-8d71-4f60-96cb-dd2f4e76b6f6",
    isActive: false,
    balance: "$2,029.29",
    picture: "http://placehold.it/32x32",
    age: 26,
  },
  {
    _id: "63b17caf5a32335ff999613e",
    index: 4,
    guid: "21593e2d-95f5-4973-8ab1-208cfc705678",
    isActive: true,
    balance: "$1,659.22",
    picture: "http://placehold.it/32x32",
    age: 26,
  },
];

module.exports = async function (fastify, opts) {
  fastify.get("/", async function (request, reply) {
    reply.setCookie("foo", "foo", {
      domain: "localhost",
      path: "/",
      secure: true,
      sameSite: "lax",
      httpOnly: true,
    });

    return randomJSON;
  });

  fastify.post("/", async function (request, reply) {
    const data = request.body;
    return `Hello ${data.name}`;
  });
};

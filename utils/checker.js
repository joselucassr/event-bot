const checkRole = (msg) => {
  if (
    msg.channel.type === 'dm' ||
    !msg.member.roles.cache.find((r) => r.id === '797024961738178590')
  )
    return 'noPerm';
};

module.exports = {
  checkRole,
};

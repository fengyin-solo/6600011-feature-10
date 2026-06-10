import React from 'react';

const STEPS = [
  { icon: '🔌', title: '连接设备', desc: '将 EEG 采集设备接入系统' },
  { icon: '📊', title: '开始采集', desc: '数据将自动流入并实时展示' },
  { icon: '📼', title: '查看回放', desc: '回放历史录制数据' },
];

export const EmptyGuide: React.FC = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '32px 20px',
    }}>
      <div style={{
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #e3f2fd, #bbdefb)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '24px',
        marginBottom: '16px',
      }}>
        🧠
      </div>
      <div style={{ fontSize: '14px', fontWeight: 600, color: '#333', marginBottom: '6px' }}>
        暂无数据
      </div>
      <div style={{ fontSize: '12px', color: '#999', marginBottom: '20px' }}>
        按以下步骤开始使用
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
        {STEPS.map((step, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '10px 14px',
              borderRadius: '10px',
              background: '#f8fafc',
              border: '1px solid #edf2f7',
            }}
          >
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: '#fff',
              border: '1px solid #e2e8f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '18px',
              flexShrink: 0,
            }}>
              {step.icon}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#333' }}>
                <span style={{
                  display: 'inline-block',
                  width: '18px',
                  height: '18px',
                  lineHeight: '18px',
                  borderRadius: '50%',
                  background: '#1565c0',
                  color: '#fff',
                  fontSize: '11px',
                  textAlign: 'center',
                  marginRight: '6px',
                  fontWeight: 700,
                }}>{i + 1}</span>
                {step.title}
              </div>
              <div style={{ fontSize: '11px', color: '#999', marginTop: '2px', marginLeft: '24px' }}>
                {step.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
